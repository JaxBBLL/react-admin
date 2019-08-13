export const dateFmt = function(date, fmt = "YYYY-MM-DD HH:mm:ss") {
  if (!date) {
    return "";
  }
  if (typeof date === "string") {
    date = new Date(date.replace(/-/g, "/"));
  }
  if (typeof date === "number") {
    date = new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  var week = {
    "0": "\u65e5",
    "1": "\u4e00",
    "2": "\u4e8c",
    "3": "\u4e09",
    "4": "\u56db",
    "5": "\u4e94",
    "6": "\u516d"
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "\u661f\u671f"
          : "\u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

export function toJSON(val) {
  return val == null
    ? ""
    : typeof val === "object"
    ? JSON.stringify(val, null, 2)
    : String(val);
}

export function dateRange(start, end, time) {
  //  时间范围判断 true:在规定范围内
  start = new Date(start).getTime() / 1000;
  end = new Date(end).getTime() / 1000;
  const range = parseInt(end - start); //  秒数
  if (range >= time) {
    return false;
  } else {
    return true;
  }
}

export function typeOf(obj) {
  return Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
}

// deepCopy
export function deepCopy(data) {
  const t = typeOf(data);
  let o;
  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }
  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === "object") {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

//  http发送之前对数据处理，去除两边空字符串，默认过滤空字符串字段的发送
export function objReduce(data) {
  var o = deepCopy(data);
  for (var k in o) {
    if (typeOf(o[k]) === "string") {
      o[k] = o[k].trim();
      if (o[k] === "") {
        delete o[k];
      }
    }
  }
  return o;
}

export function adornUrl(actionName) {
  const baseUrl = "";
  return process.env.NODE_ENV === "development"
    ? "/proxyApi" + actionName
    : baseUrl + actionName;
}

export async function errorCaptured(asyncFunc) {
  try {
    let res = await asyncFunc();
    return [null, res];
  } catch (e) {
    return [e, null];
  }
}

export function validateForm(formName) {
  return new Promise((resolve, reject) => {
    this.$refs[formName].validate(valid => {
      if (valid) {
        resolve(true);
      } else {
        // Promise.reject(new Error(false));
      }
    });
  });
}
