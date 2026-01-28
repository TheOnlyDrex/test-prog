import {registerBlockType} from '@wordpress/blocks'; 
//tra graffe indico il nome della funz da importare. guarda anche export default per info aggiuntive
//controlla l'importazione e non fidarti di copilot, magari vuoi importare qualcosa di omonimo però da un altro pacchetto
import blockMeta from '../block.json'; //importa il file block.json e lo assegna alla variabile blockMeta (blockMeta nome che decido io)
import{InnerBlocks, useBlockProps, InspectorControls} from '@wordpress/block-editor';
import{PanelBody, RangeControl, TabPanel} from '@wordpress/components';
import ResponsiveTabPanel from './ResponsiveTabPanel';


registerBlockType(blockMeta.name, /*prende il nome del blocco dal file block.json*/ {
        title: blockMeta.title,
        description: blockMeta.description,
        category: blockMeta.category,
        icon: blockMeta.icon,
        attributes:{
            "mobileColumns": {
                "type": "number",
                "default": 1
            },
            "tabletColumns": {
                "type": "number",
                "default": 2
            },
            "desktopColumns": {
                "type": "number",
                "default": 3
            }

        },
        edit: (props) =>{
            const blockProps=useBlockProps({
                style: {
                '--cer-grid--mob-columns': props.attributes.mobileColumns,
                '--cer-grid--tablet-columns': props.attributes.tabletColumns,
                '--cer-grid--desktop-columns': props.attributes.desktopColumns
                }
            });
            
            return <>
            <InspectorControls key="settings">
                <PanelBody title="Grid Settings">
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
                    
                    
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <InnerBlocks />
            </div>
        </>;
        },
        /*funzione freccia
        posso fare anche un file edit.js e save.js e le importo; 
        magari fallo solo se sono molto lunghi*/
        //codice che viene eseguito fichè lavoro nel blocco

        /*esempio di argomento dentro le garffe di edit
            const date=new Date();
            return <span>{date.toString()}</span>
            */
        save: (props) =>{
            
            const blockProps= useBlockProps.save({
                style: {
                '--cer-grid--mob-columns': props.attributes.mobileColumns,
                '--cer-grid--tablet-columns': props.attributes.tabletColumns,
                '--cer-grid--desktop-columns': props.attributes.desktopColumns
                }
                });
                return <>

                    <div {...blockProps}>
                        <InnerBlocks.Content />
                    </div>
                </>
        }
        //codice che viene eseguito quando premo salva, entrambe devono aver eun return. il return deve avere solo 1 tag
        //InnerBlocks permette di inserire altri blocchi dentro questo blocco ma posso usarlo solo una volta
    }

)