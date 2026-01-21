import { registerBlockType } from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

import { 
    InspectorControls,//il fatto che abbia la maiuscola vuol dire che è un componente
    useBlockProps 
} from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

import block from '../block.json';

registerBlockType( block.name, {
    title: block.title,
    description:block.description,
    attributes: {
        blockId: {
            type: 'string'
        }
    },
    edit: ( props ) => {      
        const blockProps = useBlockProps();

        return <>
            <InspectorControls key="settings">
                <TextControl
                    label="url di destinazione"
                    value={props.attributes.targeturl}
                    onChange={(valoreAttuale) => {props.setAttributes({targeturl: valoreAttuale})
                } }
                />

            </InspectorControls>
            <InspectorControls key="styles"> 

            </InspectorControls>
            <span { ...blockProps } >il mio bottone</span>
            </>;
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        
        return <a { ...blockProps } href={props.attributes.targeturl}>il mio bottone</a>;
    }
    
} );
//key settings o style mi mette cio che scrivo o nei stili a destra o nel menu nel caso dei settings
//https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page