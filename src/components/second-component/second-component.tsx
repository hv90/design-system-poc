import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'second-component',
  styleUrl: 'second-component.css',
  shadow: true,
})
export class SecondComponent {
  @Prop() label?: string;
  @Prop() size?: 'large' | 'medium' | 'small';
  @Prop() borderRadius?: 'none' | 'large' | 'medium' | 'small';
  @Prop() color?: string;
  @Prop() background?: string;
  @Prop() clickButton?: (e: MouseEvent) => void;

  private getSize() {
    switch (this.size) {
      case 'large':
        return '28px';
      case 'medium':
        return '22px';
      case 'small':
        return '18px';
    }
  }

  private getBorder() {
    switch (this.borderRadius) {
      case 'large':
        return '20px';
      case 'medium':
        return '10px';
      case 'small':
        return '5px';
      case 'none':
        return 'none';
    }
  }

  render() {
    return (
      <Host>
        <button style={{ backgroundColor: this.background, padding: this.getSize(), color: this.color, borderRadius: this.getBorder() }} onClick={this.clickButton}>
          {this.label}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
