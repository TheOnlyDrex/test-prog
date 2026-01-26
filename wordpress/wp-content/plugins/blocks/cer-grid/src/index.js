import {registerBlockType} from '@wordpress/blocks'; 
//tra graffe indico il nome della funz da importare. guarda anche export default per info aggiuntive
//controlla l'importazione e non fidarti di copilot, magari vuoi importare qualcosa di omonimo però da un altro pacchetto
import blockMeta from '../block.json'; //importa il file block.json e lo assegna alla variabile blockMeta (blockMeta nome che decido io)
import{InnerBlocks, useBlockProps} from '@wordpress/block-editor';

registerBlockType(blockMeta.name, /*prende il nome del blocco dal file block.json*/ {
        title: blockMeta.title,
        description: blockMeta.description,
        category: blockMeta.category,
        icon: blockMeta.icon,
        edit: (props) =>{
            const blockProps= useBlockProps() //per sfruttare le funzionalità native di wp
            return <div {...blockProps}>
                <InnerBlocks />
            </div>
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
            const blockProps= useBlockProps.save(props);
                return <div {...blockProps}>
                    <InnerBlocks.Content />
                </div>
        }
        //codice che viene eseguito quando pigio salva, entrambe devono aver eun return. il return deve avere solo 1 tag
        //InnerBlocks permette di inserire altri blocchi dentro questo blocco ma posso usarlo solo una volta
    }

)