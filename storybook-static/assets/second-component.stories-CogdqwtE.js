import{x as s}from"./lit-element-BjFAGNZS.js";const R={title:"Components/SecondComponent",component:"second-component",tags:["autodocs"],args:{label:"Click Me",size:"medium",color:"white",backgroundColor:"blue",borderRadius:"medium"},argTypes:{label:{control:"text",description:"Label text inside the button"},size:{control:{type:"select"},options:["large","medium","small"],description:"Size of the button"},borderRadius:{control:{type:"select"},options:["none","large","medium","small"],description:"Border radius of the button"},color:{control:"color",description:"Text color of the button"},backgroundColor:{control:"color",description:"Background color of the button"},clickButton:{action:"clicked",description:"Action triggered on button click"}}},c={args:{label:"Click Me",size:"medium",color:"white",backgroundColor:"blue",borderRadius:"none",clickButton:()=>{alert("hello world")}},render:({label:o,size:e,borderRadius:n,color:r,backgroundColor:l,clickButton:t})=>s`
      <second-component label=${o} size=${e} borderRadius=${n} color=${r} background=${l} .clickButton=${t}></second-component>
    `},d={args:{label:"Large Button",size:"large",color:"white",backgroundColor:"green",borderRadius:"medium",clickButton:()=>{"this function was not binded so it could be displayed";alert("hello world")}},render:({label:o,size:e,borderRadius:n,color:r,backgroundColor:l,clickButton:t})=>s`
      <second-component label=${o} size=${e} borderRadius=${n} color=${r} background=${l} clickButton=${t}></second-component>
    `},a={args:{label:"Small Button",size:"small",color:"white",backgroundColor:"red",borderRadius:"small",clickButton:()=>{"this function was not binded so it could be displayed";alert("hello world")}},render:({label:o,size:e,borderRadius:n,color:r,backgroundColor:l,clickButton:t})=>s`
      <second-component label=${o} size=${e} borderRadius=${n} color=${r} background=${l} clickButton=${t}></second-component>
    `};var i,u,b;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Click Me',
    size: 'medium',
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 'none',
    clickButton: () => {
      alert('hello world');
    }
  },
  render: ({
    label,
    size,
    borderRadius,
    color,
    backgroundColor,
    clickButton
  }) => {
    return html\`
      <second-component label=\${label} size=\${size} borderRadius=\${borderRadius} color=\${color} background=\${backgroundColor} .clickButton=\${clickButton}></second-component>
    \`;
  }
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,p,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    size: 'large',
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 'medium',
    clickButton: () => {
      'this function was not binded so it could be displayed';

      alert('hello world');
    }
  },
  render: ({
    label,
    size,
    borderRadius,
    color,
    backgroundColor,
    clickButton
  }) => {
    return html\`
      <second-component label=\${label} size=\${size} borderRadius=\${borderRadius} color=\${color} background=\${backgroundColor} clickButton=\${clickButton}></second-component>
    \`;
  }
}`,...(g=(p=d.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,$,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    size: 'small',
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 'small',
    clickButton: () => {
      'this function was not binded so it could be displayed';

      alert('hello world');
    }
  },
  render: ({
    label,
    size,
    borderRadius,
    color,
    backgroundColor,
    clickButton
  }) => {
    return html\`
      <second-component label=\${label} size=\${size} borderRadius=\${borderRadius} color=\${color} background=\${backgroundColor} clickButton=\${clickButton}></second-component>
    \`;
  }
}`,...(B=($=a.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const z=["Default","LargeButton","SmallRedButton"];export{c as Default,d as LargeButton,a as SmallRedButton,z as __namedExportsOrder,R as default};
