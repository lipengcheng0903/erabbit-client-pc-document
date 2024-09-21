(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{372:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-3-babel-jsx-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-babel-jsx-插件"}},[e._v("#")]),e._v(" Vue 3 Babel JSX 插件")]),e._v(" "),t("p",[e._v("以 JSX 的方式来编写 Vue 代码")]),e._v(" "),t("p",[e._v("简体中文")]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("安装插件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm install @vue/babel-plugin-jsx -D\n")])])]),t("p",[e._v("配置 Babel")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "plugins": ["@vue/babel-plugin-jsx"]\n}\n')])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),t("h4",{attrs:{id:"transformon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transformon"}},[e._v("#")]),e._v(" transformOn")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("boolean")])]),e._v(" "),t("p",[e._v("Default: "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("把 "),t("code",[e._v("on: { click: xx }")]),e._v(" 转成 "),t("code",[e._v("onClick: xxx")])]),e._v(" "),t("h4",{attrs:{id:"optimize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimize"}},[e._v("#")]),e._v(" optimize")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("boolean")])]),e._v(" "),t("p",[e._v("Default: "),t("code",[e._v("false")])]),e._v(" "),t("p",[e._v("是否开启优化. 如果你对 Vue 3 不太熟悉，不建议打开")]),e._v(" "),t("h4",{attrs:{id:"iscustomelement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iscustomelement"}},[e._v("#")]),e._v(" isCustomElement")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("(tag: string) => boolean")])]),e._v(" "),t("p",[e._v("Default: "),t("code",[e._v("undefined")])]),e._v(" "),t("p",[e._v("自定义元素")]),e._v(" "),t("h4",{attrs:{id:"mergeprops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mergeprops"}},[e._v("#")]),e._v(" mergeProps")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("boolean")])]),e._v(" "),t("p",[e._v("Default: "),t("code",[e._v("true")])]),e._v(" "),t("p",[e._v("合并 class / style / onXXX handlers")]),e._v(" "),t("h4",{attrs:{id:"enableobjectslots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enableobjectslots"}},[e._v("#")]),e._v(" enableObjectSlots")]),e._v(" "),t("p",[e._v("使用 "),t("code",[e._v("enableObjectSlots")]),e._v(" (文档下面会提到)。虽然在 JSX 中比较好使，但是会增加一些 "),t("code",[e._v("_isSlot")]),e._v(" 的运行时条件判断，这会增加你的项目体积。即使你关闭了 "),t("code",[e._v("enableObjectSlots")]),e._v("，"),t("code",[e._v("v-slots")]),e._v(" 还是可以使用")]),e._v(" "),t("h4",{attrs:{id:"pragma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pragma"}},[e._v("#")]),e._v(" pragma")]),e._v(" "),t("p",[e._v("Type: "),t("code",[e._v("string")])]),e._v(" "),t("p",[e._v("Default: "),t("code",[e._v("createVNode")])]),e._v(" "),t("p",[e._v("替换编译JSX表达式的时候使用的函数")]),e._v(" "),t("h2",{attrs:{id:"表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[e._v("#")]),e._v(" 表达式")]),e._v(" "),t("h3",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),t("p",[e._v("函数式组件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const App = () => <div></div>;\n")])])]),t("p",[e._v("在 render 中使用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const App = {\n  render() {\n    return <div>Vue 3.0</div>;\n  },\n};\nimport { withModifiers, defineComponent } from "vue";\n\nconst App = defineComponent({\n  setup() {\n    const count = ref(0);\n\n    const inc = () => {\n      count.value++;\n    };\n\n    return () => (\n      <div onClick={withModifiers(inc, ["self"])}>{count.value}</div>\n    );\n  },\n});\n')])])]),t("p",[e._v("Fragment")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const App = () => (\n  <>\n    <span>I'm</span>\n    <span>Fragment</span>\n  </>\n);\n")])])]),t("h3",{attrs:{id:"attributes-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attributes-props"}},[e._v("#")]),e._v(" Attributes / Props")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const App = () => <input type="email" />;\n')])])]),t("p",[e._v("动态绑定:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const placeholderText = "email";\nconst App = () => <input type="email" placeholder={placeholderText} />;\n')])])]),t("h3",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[e._v("#")]),e._v(" 指令")]),e._v(" "),t("p",[e._v("v-show")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const App = {\n  data() {\n    return { visible: true };\n  },\n  render() {\n    return <input v-show={this.visible} />;\n  },\n};\n")])])]),t("p",[e._v("v-model")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：如果想要使用 "),t("code",[e._v("arg")]),e._v(", 第二个参数需要为字符串")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<input v-model={val} />\n<input v-model={[val, ["modifier"]]} />\n<A v-model={[val, "argument", ["modifier"]]} />\n')])])]),t("p",[e._v("会变编译成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('h(A, {\n  argument: val,\n  argumentModifiers: {\n    modifier: true,\n  },\n  "onUpdate:argument": ($event) => (val = $event),\n});\n')])])]),t("p",[e._v("v-models")]),e._v(" "),t("blockquote",[t("p",[e._v("注意: 你应该传递一个二维数组给 v-models。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<A v-models={[[foo], [bar, "bar"]]} />\n<A\n  v-models={[\n    [foo, "foo"],\n    [bar, "bar"],\n  ]}\n/>\n<A\n  v-models={[\n    [foo, ["modifier"]],\n    [bar, "bar", ["modifier"]],\n  ]}\n/>\n')])])]),t("p",[e._v("会变编译成：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('h(A, {\n  modelValue: foo,\n  modelModifiers: {\n    modifier: true,\n  },\n  "onUpdate:modelValue": ($event) => (foo = $event),\n  bar: bar,\n  barModifiers: {\n    modifier: true,\n  },\n  "onUpdate:bar": ($event) => (bar = $event),\n});\n')])])]),t("p",[e._v("自定义指令")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const App = {\n  directives: { custom: customDirective },\n  setup() {\n    return () => <a v-custom={[val, "arg", ["a", "b"]]} />;\n  },\n};\n')])])]),t("h3",{attrs:{id:"插槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[e._v("#")]),e._v(" 插槽")]),e._v(" "),t("blockquote",[t("p",[e._v("注意: 在 "),t("code",[e._v("jsx")]),e._v(" 中，应该使用 "),t("strong",[t("code",[e._v("v-slots")])]),e._v(" 代替 "),t("em",[t("code",[e._v("v-slot")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const A = (props, { slots }) => (\n  <>\n    <h1>{ slots.default ? slots.default() : 'foo' }</h1>\n    <h2>{ slots.bar?.() }</h2>\n  </>\n);\n\nconst App = {\n  setup() {\n    const slots = {\n      bar: () => <span>B</span>,\n    };\n    return () => (\n      <A v-slots={slots}>\n        <div>A</div>\n      </A>\n    );\n  },\n};\n\n// or\n\nconst App = {\n  setup() {\n    const slots = {\n      default: () => <div>A</div>,\n      bar: () => <span>B</span>,\n    };\n    return () => <A v-slots={slots} />;\n  },\n};\n\n// or\nconst App = {\n  setup() {\n    return () => (\n      <>\n        <A>\n          {{\n            default: () => <div>A</div>,\n            bar: () => <span>B</span>,\n          }}\n        </A>\n        <B>{() => \"foo\"}</B>\n      </>\n    );\n  },\n};\n")])])]),t("h3",{attrs:{id:"在-typesript-中使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-typesript-中使用"}},[e._v("#")]),e._v(" 在 TypeSript 中使用")]),e._v(" "),t("p",[t("code",[e._v("tsconfig.json")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "compilerOptions": {\n    "jsx": "preserve"\n  }\n}\n')])])]),t("h2",{attrs:{id:"谁在用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谁在用"}},[e._v("#")]),e._v(" 谁在用")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("a",{attrs:{href:"https://www.antdv.com/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"docs/media/68747470733a2f2f716e2e616e7464762e636f6d2f6c6f676f2e706e67",alt:"img"}}),e._v(" "),t("strong",[e._v("Ant Design Vue")]),t("OutboundLink")],1)]),e._v(" "),t("th",[t("a",{attrs:{href:"https://youzan.github.io/vant/#/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"docs/media/68747470733a2f2f696d672e797a63646e2e636e2f76616e742f6c6f676f2e706e67",alt:"img"}}),e._v(" "),t("strong",[e._v("Vant")]),t("OutboundLink")],1)]),e._v(" "),t("th",[t("a",{attrs:{href:"https://github.com/element-plus/element-plus",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://user-images.githubusercontent.com/10731096/91267529-259f3680-e7a6-11ea-9a60-3286f750de01.png",alt:"img"}}),e._v(" "),t("strong",[e._v("Element Plus")]),t("OutboundLink")],1)]),e._v(" "),t("th",[t("a",{attrs:{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"docs/media/logo.svg",alt:"img"}}),e._v(" "),t("strong",[e._v("Vue Json Pretty")]),t("OutboundLink")],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")])])]),e._v(" "),t("h2",{attrs:{id:"兼容性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),t("p",[e._v("要求：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Babel 7+")])]),e._v(" "),t("li",[t("strong",[e._v("Vue 3+")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);