import React, { Component } from "react";
import compose from "recompose/compose";
import defaultProps from "recompose/defaultProps";
import layoutStyles from "./Layout.sass";
import GMap from "./GMap";
// for hmr to work I need the first class to extend Component
export class Layout extends Component {
  render() {
    const {
      styles: { layout, header, title, main, footer, subTitle }
    } = this.props;
    return (
      <div className={layout}>
        <header className={header}>
          <div className={title}>Ahead: Accident Prone Zones</div>
          <div>Numbers represent car accidents in an area</div>
          <div className={subTitle}>
            <a href="https://github.com/oosharma/Cal-Hacks-Ahead/blob/master/public/data-set.json">
              Download Dataset
            </a>
          </div>
        </header>
        <main className={main}>
          <GMap />
        </main>
        <footer className={footer}>
          <div></div>
          <div></div>
          <div>
            <a href="https://github.com/istarkov/google-map-clustering-example">
              Credits: Clustering example google-map-react
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export const layoutHOC = compose(
  defaultProps({
    styles: layoutStyles
  })
);

export default layoutHOC(Layout);
