export function deepCopy(current, additive) {
    // 深拷贝函数
    // 参数一:需要添加拷贝的数据
    // 参数二:被拷贝的数据
    if ((typeof additive) != 'object') {
        current = additive;
    } else {
        if ((typeof current) == 'undefined' || current.constructor != additive.constructor) {
            current = new (additive.constructor);
        }
        function recur(c, a) {
            for (let key in a) {
                if ((typeof a[key]) == 'object') {
                    if ((typeof c[key]) == 'undefined' || c[key].constructor != a[key].constructor) {
                        c[key] = new (a[key].constructor);
                    }
                    recur(c[key], a[key]);
                } else {
                    c[key] = a[key];
                }
            }
        }
        recur(current, additive);
    }
    return current;
}