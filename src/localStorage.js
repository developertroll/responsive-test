class localStorage {
  static setItem(key, value) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
  }
  static getItem(key) {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(key);
    }
    return null;
  }

  static removeItem(key) {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  }
}

export default localStorage;
