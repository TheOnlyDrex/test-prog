import {TabPanel} from '@wordpress/components';

export default function ResponsiveTabPanel(
    {
        mobileContent= undefined,
        tabletContent= undefined,
        desktopContent= undefined
    }
){
    return <>
            <TabPanel 
                tabs={[
                    {
                        name: 'mobile',
                        title: 'Mobile'
                    },
                    {
                        name:'tablet',
                        title:'Tablet'
                    },
                    {
                        name:'desktop',
                        title:'Desktop'
                    }
                ]}/>
                {(tab)=>{
                    const tabname=tab.name;
                    switch(tabname){
                        case 'mobile':
                        return <RangeControl
                                    label="Numero di colonne (Mobile)"
                                    value={props.attributes.mobileColumns}
                                    onChange={
                                        (newColumns) => { props.setAttributes({mobileColumns: newColumns})}
                                    }
                                    min={1}
                                    max={12}
                                    step={1}
                                    withInputField={false}
                                />

                        case 'tablet':
                        return <RangeControl
                                    label="Numero di colonne (Tablet)"
                                    value={props.attributes.tabletColumns}
                                    onChange={
                                        (newColumns) => { props.setAttributes({tabletColumns: newColumns})}
                                    }
                                    min={1}
                                    max={12}
                                    step={1}
                                    withInputField={false}
                                />
                        
                        case 'desktop':
                        return <RangeControl
                                    label="Numero di colonne (Desktop)"
                                    value={props.attributes.desktopColumns}
                                    onChange={
                                        (newColumns) => { props.setAttributes({desktopColumns: newColumns})}
                                    }
                                    min={1}
                                    max={12}
                                    step={1}
                                    withInputField={false}
                                />
                    }
                }}
    </>
}