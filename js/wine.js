var S = Object.defineProperty;
var T = (t,o,s)=>o in t ? S(t, o, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[o] = s;
var v = (t,o,s)=>(T(t, typeof o != "symbol" ? o + "" : o, s),
s);
import {d as m, c as r, a as e, t as l, o as h, p as f, b as D, e as A, r as b, f as E, n as y, F as Y, g as F, u as d, h as x, i as $, j as R, k as g, w as H, l as k} from "./index.546c22e8.js";
const M = "/static/h5/assets/haoyouniangzaojl.486107b0.png"
  , j = "/static/h5/assets/gengduoshouyi.66f119e1.png"
  , B = t=>(f("data-v-0f96d7fa"),
t = t(),
D(),
t)
  , L = {
    class: "head container"
}
  , O = B(()=>e("div", {
    class: "row"
}, [e("div", {
    class: "col"
}, [e("img", {
    class: "titleimg",
    src: M
})])], -1))
  , V = {
    class: "row"
}
  , q = {
    class: "col"
}
  , z = B(()=>e("div", {
    class: "row"
}, [e("div", {
    class: "col"
}, [e("img", {
    class: "headimg",
    src: j
})])], -1))
  , N = {
    class: "row imgtext"
}
  , P = {
    class: "col"
}
  , G = m({
    __name: "Head",
    props: ["text", "get_all_seed"],
    setup(t) {
        return (o,s)=>(h(),
        r("div", L, [O, e("div", V, [e("div", q, l(t.text), 1)]), z, e("div", N, [e("div", P, " \u7D2F\u8BA1\u83B7\u5F97\u79CD\u5B50\u6570\u91CF\uFF1A" + l(t.get_all_seed) + "\u4E2A ", 1)])]))
    }
});
const w = (t,o)=>{
    const s = t.__vccOpts || t;
    for (const [_,u] of o)
        s[_] = u;
    return s
}
  , J = w(G, [["__scopeId", "data-v-0f96d7fa"]])
  , K = "/static/h5/assets/jianglibili.8c21240d.png"
  , Q = t=>(f("data-v-c495a811"),
t = t(),
D(),
t)
  , U = {
    class: "top container"
}
  , W = {
    class: "row"
}
  , X = {
    class: "col qimg"
}
  , Z = Q(()=>e("img", {
    class: "titleimg",
    src: K
}, null, -1))
  , tt = A()
  , et = {
    class: "red"
}
  , st = {
    class: "row"
}
  , ot = {
    class: "col"
}
  , at = m({
    __name: "Top",
    props: ["text", "bili"],
    setup(t) {
        return (o,s)=>(h(),
        r("div", U, [e("div", W, [e("div", X, [Z, tt, e("span", et, l(t.bili), 1)])]), e("div", st, [e("div", ot, l(t.text), 1)])]))
    }
});
const ct = w(at, [["__scopeId", "data-v-c495a811"]])
  , C = t=>(f("data-v-28df7e1e"),
t = t(),
D(),
t)
  , it = {
    class: "container"
}
  , nt = C(()=>e("div", {
    class: "row"
}, [e("div", {
    class: "col text-center lh"
}, "\u65E5\u671F"), e("div", {
    class: "col text-center lh"
}, "\u5151\u6362\u79CD\u5B50"), e("div", {
    class: "col text-center lh"
}, "\u6211\u83B7\u53D6\u7684\u79CD\u5B50")], -1))
  , dt = C(()=>e("div", {
    class: "col text-center"
}, " \u597D\u53CB\u917F\u9020\u5956\u52B1\u4E3A\u7A7A ", -1))
  , lt = [dt]
  , _t = {
    class: "row"
}
  , ut = {
    class: "col text-center"
}
  , rt = {
    class: "col text-center"
}
  , ht = {
    class: "col text-center"
}
  , pt = {
    class: "row"
}
  , mt = {
    class: "col text-center"
}
  , vt = {
    class: "col text-center"
}
  , gt = {
    class: "col text-center"
}
  , yt = m({
    __name: "Detail",
    props: ["list", "uid", "page", "mData"],
    setup(t) {
        const o = t;
        var s = o.page + 1
          , _ = b(new Array);
        const u = E("block");
        class p {
            constructor() {
                v(this, "startY");
                v(this, "moveY");
                v(this, "endY");
                this.startY = 0,
                this.moveY = 0,
                this.endY = 0
            }
            touchstart(c) {
                this.startY = c.touches[0].clientY
            }
            touchmove(c) {
                this.moveY = c.touches[0].clientY,
                this.startY - this.moveY <= 0
            }
            touchend(c) {
                this.endY = c.changedTouches[0].pageY,
                this.startY - this.endY >= 5 && x.postApi("/index/friendwine/datalist?uid=" + o.uid + "&page=" + s).then(a=>{
                    if (a.data.list.length) {
                        u.value = "none";
                        for (let I in a.data.list)
                            _.push(a.data.list[I]);
                        s++
                    } else
                        o.mData.display = "block",
                        o.mData.text = "\u5217\u8868\u5DF2\u52A0\u8F7D\u5B8C",
                        window.setInterval(()=>{
                            o.mData.display = "none"
                        }
                        , 3e3)
                }
                ).catch(a=>{
                    console.error("ERROR: " + a)
                }
                )
            }
        }
        const n = new p;
        return (i,c)=>(h(),
        r("div", it, [nt, e("div", {
            class: "container detail",
            onTouchstart: c[0] || (c[0] = (...a)=>d(n).touchstart && d(n).touchstart(...a)),
            onTouchmove: c[1] || (c[1] = (...a)=>d(n).touchmove && d(n).touchmove(...a)),
            onTouchend: c[2] || (c[2] = (...a)=>d(n).touchend && d(n).touchend(...a))
        }, [t.list.length == 0 ? (h(),
        r("div", {
            key: 0,
            class: "row empty",
            style: y({
                display: u.value
            })
        }, lt, 4)) : (h(!0),
        r(Y, {
            key: 1
        }, F(t.list, a=>(h(),
        r("div", _t, [e("div", ut, l(a.days), 1), e("div", rt, l(a.give_seed), 1), e("div", ht, l(a.get_seed), 1)]))), 256)), (h(!0),
        r(Y, null, F(d(_), a=>(h(),
        r("div", pt, [e("div", mt, l(a.days), 1), e("div", vt, l(a.give_seed), 1), e("div", gt, l(a.get_seed), 1)]))), 256))], 32)]))
    }
});
const xt = w(yt, [["__scopeId", "data-v-28df7e1e"]])
  , ft = t=>(f("data-v-728723cb"),
t = t(),
D(),
t)
  , Dt = {
    class: "modal-dialog"
}
  , wt = {
    class: "modal-title"
}
  , $t = ft(()=>e("button", {
    type: "button",
    class: "btn btn-danger"
}, "\u5173\u95ED", -1))
  , bt = [$t]
  , Yt = m({
    __name: "ModalSimple",
    props: ["mData"],
    setup(t) {
        const o = t;
        o.mData.displayFooter = "none",
        o.mData.displayHeader = "block";
        let s = "modal"
          , _ = "modal-body"
          , u = "modal-content";
        o.mData.tips && (o.mData.displayHeader = "none",
        s = "modal modaltips",
        _ = "modal-body tips-body",
        u = "modal-content tips-content");
        function p() {
            o.mData.display = "none"
        }
        return (n,i)=>(h(),
        r("div", {
            class: $(d(s)),
            style: y({
                display: t.mData.display
            })
        }, [e("div", Dt, [e("div", {
            class: $(d(u))
        }, [e("div", {
            class: "modal-header",
            style: y({
                display: t.mData.displayHeader
            })
        }, [e("h4", wt, l(t.mData.cfg.title), 1), e("button", {
            type: "button",
            class: "btn-close",
            onClick: i[0] || (i[0] = c=>p())
        })], 4), e("div", {
            class: $(d(_))
        }, [R(n.$slots, "mbody", {}, void 0, !0)], 2), e("div", {
            class: "modal-footer",
            style: y({
                display: t.mData.displayFooter
            })
        }, bt, 4)], 2)])], 6))
    }
});
const Ft = w(Yt, [["__scopeId", "data-v-728723cb"]])
  , Bt = ["innerHTML"]
  , St = m({
    __name: "Index",
    setup(t) {
        const o = x.getConfig();
        x.urlpre = o.domain ? o.domain : "https://manor.xiguawenhua.com";
        const s = b({
            get_all_seed: "0",
            one_desc: "\u76F4\u9080\u597D\u53CB\u917F\u9020\u7684\u8461\u8404\u9152\u5151\u6362\u79CD\u5B50\u540E",
            two_desc: "\u6210\u4E3A\u6E20\u9053\u5546",
            ratio: "11%",
            list: []
        })
          , _ = k()
          , u = _.currentRoute.value.query.uid ? _.currentRoute.value.query.uid : 0;
        let p = 1;
        x.postApi("/index/friendwine/datalist?uid=" + u).then(i=>{
            s.get_all_seed = i.data.get_all_seed,
            s.one_desc = i.data.one_desc,
            s.two_desc = i.data.two_desc,
            s.ratio = i.data.ratio,
            s.list = i.data.list
        }
        ).catch(i=>{
            console.error("ERROR: " + i)
        }
        );
        const n = b({
            display: "none",
            tips: 1,
            text: "",
            cfg: {
                text: "",
                meta: {},
                list: {}
            }
        });
        return (i,c)=>(h(),
        r(Y, null, [g(J, {
            text: s.one_desc,
            get_all_seed: s.get_all_seed
        }, null, 8, ["text", "get_all_seed"]), g(ct, {
            text: s.two_desc,
            bili: s.ratio
        }, null, 8, ["text", "bili"]), g(xt, {
            list: s.list,
            uid: d(u),
            page: d(p),
            mData: n
        }, null, 8, ["list", "uid", "page", "mData"]), g(Ft, {
            mData: n
        }, {
            mbody: H(()=>[e("div", {
                class: "text",
                innerHTML: n.text
            }, null, 8, Bt)]),
            _: 1
        }, 8, ["mData"])], 64))
    }
});
export {St as default};
