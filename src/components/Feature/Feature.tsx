import { PropsWithChildren } from "react";
import styled from '@emotion/styled';
import { linkColor } from "../../shared/colors";
import { Typography } from "../Typography/Typography";

const FeatureContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    padding: 8px;
    border-radius: 4px;

    a, a:visited, a:hover {
    }
`;

interface IFeatureProps {}

export const Feature = (props: PropsWithChildren<IFeatureProps>) => {
    const { children } = props;

    return (
        <FeatureContainer>
            <Typography>
                {children}
            </Typography>
        </FeatureContainer>
    );
}