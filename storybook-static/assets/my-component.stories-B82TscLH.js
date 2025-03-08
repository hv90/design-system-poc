import{x as p}from"./lit-element-BjFAGNZS.js";const D={title:"Components/MyComponent",component:"my-component",tags:["autodocs"],args:{firstValue:"John",firstColor:"blue",firstFontSize:"16px",firstFontWeight:"normal",middleValue:"Doe",middleColor:"green",middleFontSize:"16px",middleFontWeight:"normal",lastValue:"Smith",lastColor:"red",lastFontSize:"16px",lastFontWeight:"normal",backgroundColor:"lightgray"},argTypes:{firstValue:{control:"text",description:"First name"},firstFontSize:{control:{type:"select"},options:["16px","18px","20px"],description:"Font size of the first name"},firstColor:{control:"color",description:"Color of the first name"},firstFontWeight:{control:{type:"select"},options:["normal","bold","bolder","lighter"],description:"Font weight of the first name"},middleValue:{control:"text",description:"Middle name"},middleFontSize:{control:{type:"select"},options:["16px","18px","20px"],description:"Font size of the middle name"},middleColor:{control:"color",description:"Color of the middle name"},middleFontWeight:{control:{type:"select"},options:["normal","bold","bolder","lighter"],description:"Font weight of the middle name"},lastValue:{control:"text",description:"Last name"},lastFontSize:{control:{type:"select"},options:["16px","18px","20px"],description:"Font size of the last name"},lastColor:{control:"color",description:"Color of the last name"},lastFontWeight:{control:{type:"select"},options:["normal","bold","bolder","lighter"],description:"Font weight of the last name"},backgroundColor:{control:"color"}}},g={render:({firstValue:t,firstColor:o,firstFontSize:n,firstFontWeight:e,middleValue:l,middleColor:i,middleFontSize:r,middleFontWeight:s,lastValue:a,lastColor:d,lastFontSize:m,lastFontWeight:c,backgroundColor:f})=>p` <my-component .first=${{value:t,color:o,fontSize:n,fontWeight:e}} .middle=${{value:l,color:i,fontSize:r,fontWeight:s}} .last=${{value:a,color:d,fontSize:m,fontWeight:c}} background=${f}> </my-component> `},u={args:{firstValue:"Alice",firstColor:"purple",firstFontSize:"18px",firstFontWeight:"bold",middleValue:"Grace",middleColor:"orange",middleFontSize:"14px",middleFontWeight:"normal",lastValue:"Johnson",lastColor:"blue",lastFontSize:"20px",lastFontWeight:"lighter",backgroundColor:"lightyellow"},render:({firstValue:t,firstColor:o,firstFontSize:n,firstFontWeight:e,middleValue:l,middleColor:i,middleFontSize:r,middleFontWeight:s,lastValue:a,lastColor:d,lastFontSize:m,lastFontWeight:c,backgroundColor:f})=>p` <my-component .first=${{value:t,color:o,fontSize:n,fontWeight:e}} .middle=${{value:l,color:i,fontSize:r,fontWeight:s}} .last=${{value:a,color:d,fontSize:m,fontWeight:c}} background=${f}> </my-component> `},h={args:{firstValue:"Eve",firstColor:"pink",firstFontSize:"16px",firstFontWeight:"normal",lastValue:"Smith",lastColor:"gray",lastFontSize:"16px",lastFontWeight:"bold",backgroundColor:"lightblue"},render:({firstValue:t,firstColor:o,firstFontSize:n,firstFontWeight:e,middleValue:l,middleColor:i,middleFontSize:r,middleFontWeight:s,lastValue:a,lastColor:d,lastFontSize:m,lastFontWeight:c,backgroundColor:f})=>p` <my-component .first=${{value:t,color:o,fontSize:n,fontWeight:e}} .middle=${{value:l,color:i,fontSize:r,fontWeight:s}} .last=${{value:a,color:d,fontSize:m,fontWeight:c}} background=${f}> </my-component> `};var z,C,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    firstValue,
    firstColor,
    firstFontSize,
    firstFontWeight,
    middleValue,
    middleColor,
    middleFontSize,
    middleFontWeight,
    lastValue,
    lastColor,
    lastFontSize,
    lastFontWeight,
    backgroundColor
  }) => {
    const first = {
      value: firstValue,
      color: firstColor,
      fontSize: firstFontSize,
      fontWeight: firstFontWeight
    };
    const middle = {
      value: middleValue,
      color: middleColor,
      fontSize: middleFontSize,
      fontWeight: middleFontWeight
    };
    const last = {
      value: lastValue,
      color: lastColor,
      fontSize: lastFontSize,
      fontWeight: lastFontWeight
    };
    return html\` <my-component .first=\${first} .middle=\${middle} .last=\${last} background=\${backgroundColor}> </my-component> \`;
  }
}`,...(V=(C=g.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var b,x,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    firstValue: 'Alice',
    firstColor: 'purple',
    firstFontSize: '18px',
    firstFontWeight: 'bold',
    middleValue: 'Grace',
    middleColor: 'orange',
    middleFontSize: '14px',
    middleFontWeight: 'normal',
    lastValue: 'Johnson',
    lastColor: 'blue',
    lastFontSize: '20px',
    lastFontWeight: 'lighter',
    backgroundColor: 'lightyellow'
  },
  render: ({
    firstValue,
    firstColor,
    firstFontSize,
    firstFontWeight,
    middleValue,
    middleColor,
    middleFontSize,
    middleFontWeight,
    lastValue,
    lastColor,
    lastFontSize,
    lastFontWeight,
    backgroundColor
  }) => {
    const first = {
      value: firstValue,
      color: firstColor,
      fontSize: firstFontSize,
      fontWeight: firstFontWeight
    };
    const middle = {
      value: middleValue,
      color: middleColor,
      fontSize: middleFontSize,
      fontWeight: middleFontWeight
    };
    const last = {
      value: lastValue,
      color: lastColor,
      fontSize: lastFontSize,
      fontWeight: lastFontWeight
    };
    return html\` <my-component .first=\${first} .middle=\${middle} .last=\${last} background=\${backgroundColor}> </my-component> \`;
  }
}`,...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var $,k,v;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    firstValue: 'Eve',
    firstColor: 'pink',
    firstFontSize: '16px',
    firstFontWeight: 'normal',
    lastValue: 'Smith',
    lastColor: 'gray',
    lastFontSize: '16px',
    lastFontWeight: 'bold',
    backgroundColor: 'lightblue'
  },
  render: ({
    firstValue,
    firstColor,
    firstFontSize,
    firstFontWeight,
    middleValue,
    middleColor,
    middleFontSize,
    middleFontWeight,
    lastValue,
    lastColor,
    lastFontSize,
    lastFontWeight,
    backgroundColor
  }) => {
    const first = {
      value: firstValue,
      color: firstColor,
      fontSize: firstFontSize,
      fontWeight: firstFontWeight
    };
    const middle = {
      value: middleValue,
      color: middleColor,
      fontSize: middleFontSize,
      fontWeight: middleFontWeight
    };
    const last = {
      value: lastValue,
      color: lastColor,
      fontSize: lastFontSize,
      fontWeight: lastFontWeight
    };
    return html\` <my-component .first=\${first} .middle=\${middle} .last=\${last} background=\${backgroundColor}> </my-component> \`;
  }
}`,...(v=(k=h.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const M=["Default","WithDifferentStyles","WithNoMiddleName"];export{g as Default,u as WithDifferentStyles,h as WithNoMiddleName,M as __namedExportsOrder,D as default};
