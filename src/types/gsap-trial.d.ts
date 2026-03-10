declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(targets: any, config?: any);
    revert(): void;
    chars: any[];
    words: any[];
    lines: any[];
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(config?: any): ScrollSmoother;
    static refresh(force?: boolean): void;
    scrollTop(value?: number): number | void;
    paused(value?: boolean): boolean | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    refresh(force?: boolean): void;
  }
}
