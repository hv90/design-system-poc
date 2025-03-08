import { html } from 'lit';

const meta = {
  title: 'Components/MyComponent',
  component: 'my-component',
  tags: ['autodocs'],
  args: {
    firstValue: 'John',
    firstColor: 'blue',
    firstFontSize: '16px',
    firstFontWeight: 'normal',
    middleValue: 'Doe',
    middleColor: 'green',
    middleFontSize: '16px',
    middleFontWeight: 'normal',
    lastValue: 'Smith',
    lastColor: 'red',
    lastFontSize: '16px',
    lastFontWeight: 'normal',
    backgroundColor: 'lightgray',
  },
  argTypes: {
    firstValue: {
      control: 'text',
      description: 'First name',
    },
    firstFontSize: {
      control: { type: 'select' },
      options: ['16px', '18px', '20px'],
      description: 'Font size of the first name',
    },
    firstColor: {
      control: 'color',
      description: 'Color of the first name',
    },
    firstFontWeight: {
      control: {
        type: 'select',
      },
      options: ['normal', 'bold', 'bolder', 'lighter'],

      description: 'Font weight of the first name',
    },
    middleValue: {
      control: 'text',
      description: 'Middle name',
    },
    middleFontSize: {
      control: {
        type: 'select',
      },
      options: ['16px', '18px', '20px'],

      description: 'Font size of the middle name',
    },
    middleColor: {
      control: 'color',
      description: 'Color of the middle name',
    },
    middleFontWeight: {
      control: {
        type: 'select',
      },
      options: ['normal', 'bold', 'bolder', 'lighter'],

      description: 'Font weight of the middle name',
    },
    lastValue: {
      control: 'text',
      description: 'Last name',
    },
    lastFontSize: {
      control: {
        type: 'select',
      },
      options: ['16px', '18px', '20px'],

      description: 'Font size of the last name',
    },
    lastColor: {
      control: 'color',
      description: 'Color of the last name',
    },
    lastFontWeight: {
      control: {
        type: 'select',
      },
      options: ['normal', 'bold', 'bolder', 'lighter'],

      description: 'Font weight of the last name',
    },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Default = {
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
    backgroundColor,
  }) => {
    const first = { value: firstValue, color: firstColor, fontSize: firstFontSize, fontWeight: firstFontWeight };
    const middle = { value: middleValue, color: middleColor, fontSize: middleFontSize, fontWeight: middleFontWeight };
    const last = { value: lastValue, color: lastColor, fontSize: lastFontSize, fontWeight: lastFontWeight };

    return html` <my-component .first=${first} .middle=${middle} .last=${last} background=${backgroundColor}> </my-component> `;
  },
};

export const WithDifferentStyles = {
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
    backgroundColor: 'lightyellow',
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
    backgroundColor,
  }) => {
    const first = { value: firstValue, color: firstColor, fontSize: firstFontSize, fontWeight: firstFontWeight };
    const middle = { value: middleValue, color: middleColor, fontSize: middleFontSize, fontWeight: middleFontWeight };
    const last = { value: lastValue, color: lastColor, fontSize: lastFontSize, fontWeight: lastFontWeight };

    return html` <my-component .first=${first} .middle=${middle} .last=${last} background=${backgroundColor}> </my-component> `;
  },
};

export const WithNoMiddleName = {
  args: {
    firstValue: 'Eve',
    firstColor: 'pink',
    firstFontSize: '16px',
    firstFontWeight: 'normal',
    lastValue: 'Smith',
    lastColor: 'gray',
    lastFontSize: '16px',
    lastFontWeight: 'bold',
    backgroundColor: 'lightblue',
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
    backgroundColor,
  }) => {
    const first = { value: firstValue, color: firstColor, fontSize: firstFontSize, fontWeight: firstFontWeight };
    const middle = { value: middleValue, color: middleColor, fontSize: middleFontSize, fontWeight: middleFontWeight };
    const last = { value: lastValue, color: lastColor, fontSize: lastFontSize, fontWeight: lastFontWeight };

    return html` <my-component .first=${first} .middle=${middle} .last=${last} background=${backgroundColor}> </my-component> `;
  },
};
