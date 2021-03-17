class Event {
    constructor() {
        this._cache = {}
    }

    // 绑定事件
    on(eventName, callback) {
        // 存在则放入，没有则新建
        let fns = (this._cache[eventName]||[])
        fns.push(callback)
        this._cache[eventName] = fns
        return this
    }

    // 触发事件
    trigger(eventName,data) {
        let fns = this._cache[eventName]
        if (Array.isArray(fns)) {
            fns.forEach((fn) => {
                fn(data)
            })
        }

        return this
    }

    off(eventName, callback) {
        let fns = this._cache[eventName]
        if (Array.isArray(fns)) {
            if (callback) {
                let index = fns.indexOf(callback)
                if (index !== -1) {
                    fns.splice(index, 1)
                } else {
                    fns.length = 0
                }
            }
        }
        return this
    }

    once(eventName,callback) {
        let fns = (...args)=>{
            console.log(args)
            callback.apply(args)
            this.off(eventName, fns)
        }

        this.on(eventName, fns)
        return this
    }
}

const event = new Event()

event.on('test', (a) => {
    console.log(a)
})
event.once('test', (a) => {
            console.log('hello'+a)
    })
event.trigger('test', 'hello world');
event.trigger('test', 'hello world');

