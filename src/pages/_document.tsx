import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                <link rel="shorcut icon" href="uauLogo.png" type="image/png"/>                
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        );
    }
}