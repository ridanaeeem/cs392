import React from "react";
import { Main, MainTitle, MainText } from "./Home"
import { StyledList, Subheading } from "./Education"

export function Projects(){
    return (
        <Main>
            <MainTitle>Current Projects</MainTitle>
            <MainText>
                <Subheading><strong>EPM Analysis</strong></Subheading>
                <ul>
                    <StyledList>Creating R script to analyze EPM data in Meyer Lab</StyledList>
                    <StyledList>Performing statistical analysis on data in search for correlations between freezing behaviors, age, sex, and conditioning</StyledList>
                </ul>
                <Subheading><strong>Freezing Analysis</strong></Subheading>
                <ul>
                    <StyledList>Working with DeepLabCut and Python to train machine learning algorithm to score freezing behaviors in mice</StyledList>
                </ul>
                <Subheading><strong>Leaky Integrator Model</strong></Subheading>
                <ul>
                    <StyledList>Modeling neuron activity in MATLAB via leaky integrator equations</StyledList>
                </ul>
            </MainText>
        </Main>
    )
}