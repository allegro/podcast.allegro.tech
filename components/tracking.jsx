
const Tracking = () => {
    return (
        <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden', position: 'relative' }}>
            <img alt="doubleclick" width="1" height="1" style={{ position: 'absolute' }}
                src={`https://pubads.g.doubleclick.net/activity;dc_iu=/21612525419/DFPAudiencePixel;ord=${Math.random() * 10000000000000};dc_seg=507368552?`}
            />
            <img alt="fb" height="1" width="1" style={{ position: 'absolute' }}
                src="https://www.facebook.com/tr?id=1650870088530325&ev=PageView&noscript=1" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-6H60V3S51H"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-6H60V3S51H');
                }}
            />
        </div>
    )
}

export default Tracking;
