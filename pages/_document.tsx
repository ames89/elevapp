import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
