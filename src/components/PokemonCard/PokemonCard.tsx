import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
} from '@mantine/core';
import {IconHeart, IconBookmark, IconShare} from "@tabler/icons-react";
import useStyles from "./PokemonCard.styles.ts";


interface ArticleCardFooterProps {
    image: string;
    category: string;
    title: string;
    footer: string;
    author: {
        name: string;
        description: string;
        image: string;
    };
}

const PokemonCard = (props: ArticleCardFooterProps) => {
    const {
        image,
        category,
        title,
        footer,
        author,
    } = props
    const {classes, theme} = useStyles();

    return (
        <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
                <Image src={image} alt={title} height={180}/>
            </Card.Section>

            <Badge>{category}</Badge>

            <Text fw={700} className={classes.title} mt="xs">
                {title}
            </Text>

            <Group mt="lg">
                <Avatar src={author.image} radius="sm"/>
                <div>
                    <Text fw={500}>{author.name}</Text>
                    <Text fz="xs" c="dimmed">
                        {author.description}
                    </Text>
                </div>
            </Group>

            <Card.Section className={classes.footer}>
                <Group position="apart">
                    <Text fz="xs" c="dimmed">
                        {footer}
                    </Text>
                    <Group spacing={0}>
                        <ActionIcon>
                            <IconHeart size="1.2rem" color={theme.colors.red[6]} stroke={1.5}/>
                        </ActionIcon>
                        <ActionIcon>
                            <IconBookmark size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5}/>
                        </ActionIcon>
                        <ActionIcon>
                            <IconShare size="1.2rem" color={theme.colors.blue[6]} stroke={1.5}/>
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    )
}

export default PokemonCard