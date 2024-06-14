import { useEffect, useRef } from 'react';

const DGWidget = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widgets.2gis.com/js/DGWidgetLoader.js';
        script.async = true;
        script.charset = 'utf-8';
        script.onload = () => {
            if (mapRef.current) {
                new window.DGWidgetLoader({
                    "width": 640,
                    "height": 600,
                    "borderColor": "#a3a3a3",
                    "pos": {"lat": 42.85613195451227, "lon": 74.58534479141237, "zoom": 16},
                    "opt": {"city": "bishkek"},
                    "org": [{"id": "70000001024602465"}]
                }, mapRef.current);
            }
        };
        document.body.append(script);
    }, []);

    return <div ref={mapRef}></div>;
}

export default DGWidget;