import {
    Card,
    Image,
    Group,
    Text,
    Avatar,
    Badge,
} from '@mantine/core';
import useStyles from "./PokemonCard.styles.ts";
import {usePokemonInfos} from "../../services/usePokemonInfos.ts";

interface PokemonCardProps {
    pokemonName: string;
}

const PokemonCard = ({pokemonName}: PokemonCardProps) => {
    const {classes} = useStyles();
    const pokemonInfos = usePokemonInfos(pokemonName)
    if (!pokemonInfos) {
        return null;
    }
    const {
        id,
        name,
        sprites,
        types,
    } = pokemonInfos;

    return (
        <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
                <Image src={sprites.other?.["official-artwork"].front_default} height={180}/>
            </Card.Section>

            {types.map((type) => {
                return (
                    <Badge key={type.type.name}>
                        {type.type.name}
                    </Badge>
                )
            })}

            <Text fw={700} className={classes.title} mt="xs">
                {name}
            </Text>

            <Group mt="lg">
                <Avatar src={sprites.versions["generation-viii"].icons.front_default} radius="sm"/>
                <div>
                    <Text fw={500}>{id}</Text>
                </div>
            </Group>
        </Card>
    )
}

export default PokemonCard