import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <a className="link__skip-nav" href="#main-content" id="top">Skip navigation</a>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.getElementById('top').addEventListener('click', function(e) {
              e.preventDefault();
              const main_content = document.getElementById(this.href.split('#')[1]);

              if(main_content) {
                console.log('Yo');
                main_content.setAttribute('tabindex', '-1');
                main_content.addEventListener('blur', function(e) {
                  this.removeAttribute('tabindex');
                });
                main_content.focus();
                main_content.scrollIntoView();
              }
            });
            `,
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
