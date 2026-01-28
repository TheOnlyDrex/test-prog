import {ColorIndicator, ColorPalette, ColorPicker, Flex, FlexItem} from '@wordpress/components';

export default function ColorSelector(props){
    const {
        colorValue='',
        label=''
    }= props;
    return <>
        <Flex>
            <FlexItem>
                <ColorIndicator colorValue={colorValue} />
            </FlexItem>
        </Flex>
    </>;
}