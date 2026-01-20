// TypeScript declarations for custom HTML elements (Web Components)

declare namespace JSX {
  interface IntrinsicElements {
    'sn-embedx-kb-article-view': {
      'record-id'?: string;
      'hide-header'?: boolean;
      children?: React.ReactNode;
    };
    'sn-embedx-catalog-item-form': {
      'sys-id'?: string;
      'confirmation-text'?: string;
      'confirmation-sub-text'?: string;
      'primary-button-label'?: string;
      'secondary-button-label'?: string;
      'hide-reference-number'?: boolean;
      'hide-primary-button'?: boolean;
      'hide-secondary-button'?: boolean;
      children?: React.ReactNode;
    };
  }
}
