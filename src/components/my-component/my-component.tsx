import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first?: { value: string; color: string; fontSize: string; fontWeight: string };

  /**
   * The middle name
   */
  @Prop() middle?: { value: string; color: string; fontSize: string; fontWeight: string };

  /**
   * The last name
   */
  @Prop() last?: { value: string; color: string; fontSize: string; fontWeight: string };

  @Prop() background: string;

  render() {
    return (
      <Host style={{ background: this.background }}>
        Hello, World! I'm <span style={{ color: this.first?.color, fontSize: this.first?.fontSize, fontWeight: this.first?.fontWeight }}>{this.first?.value}</span>&nbsp;
        <span style={{ color: this.middle?.color, fontSize: this.middle?.fontSize, fontWeight: this.middle?.fontWeight }}>{this.middle?.value}</span>&nbsp;
        <span style={{ color: this.last?.color, fontSize: this.last?.fontSize, fontWeight: this.last?.fontWeight }}>{this.last?.value}</span>
        <slot></slot>
      </Host>
    );
  }
}
