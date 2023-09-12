import {
    IconArrowLeft,
    IconArrowRight,
} from '@tabler/icons-react';
import {Button, Flex,} from '@mantine/core';


const Pagination = ({goNext, goPrevious}: { goNext: () => void, goPrevious: () => void }) => {

    return (
        <>
            <Flex gap="md">
                <Button fullWidth onClick={goPrevious} leftIcon={<IconArrowLeft size={"1rem"}/>} color="lime"
                        radius="lg" uppercase>
                    PREVIOUS
                </Button>

                <Button fullWidth onClick={goNext} leftIcon={<IconArrowRight size={"1rem"}/>} color="lime" radius="lg"
                        uppercase>
                    NEXT
                </Button>
            </Flex>
        </>
    );

}


export default Pagination