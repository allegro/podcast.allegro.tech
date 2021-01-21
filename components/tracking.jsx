
const Tracking = () => {
    return (
        <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden', position: 'relative' }}>
            <img alt="doubleclick" width="1" height="1" style={{ position: 'absolute' }}
                src={`https://pubads.g.doubleclick.net/activity;dc_iu=/21612525419/DFPAudiencePixel;ord=${Math.random() * 10000000000000};dc_seg=507368552?`}
            />
            <img alt="fb" height="1" width="1" style={{ position: 'absolute' }}
                src="https://www.facebook.com/tr?id=1650870088530325&ev=PageView&noscript=1" />

            <script dangerouslySetInnerHTML={{
                __html: `
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-55852483-1', 'auto');
                    ga('send', 'pageview');
                    `
                }}
            />
        </div>
    )
}

export default Tracking;