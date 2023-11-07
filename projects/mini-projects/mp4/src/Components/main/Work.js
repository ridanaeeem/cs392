import React from 'react'
import styled from "styled-components";
import { Main, MainTitle, MainText } from "./Home"
import { StyledList, Subheading } from "./Education"

export const Timeframe = styled.p`
  color: #657C48;
  font-size: calc(8px + 2vh);
`

export function Work(){
    return(
        <Main>
            <MainTitle>Work History</MainTitle>
            <MainText>
                <Subheading><strong>Undergraduate Research Assistant | Meyer Laboratory</strong></Subheading>
                <Timeframe><em>Sep. 2022 - <strong>present</strong></em></Timeframe>
                <ul>
                    <StyledList>Handle mice during fear-conditioning experiments and use a cryostat and vibratome to slice mouse brains for two to six hours each week</StyledList>
                    <StyledList>Work with DeepLabCut and Python to collect data on mouse freezing behaviors</StyledList>
                    <StyledList>Hand-score hundreds of videos of mice in elevated plus maze, recording freezing and analyzing subsequent data in Microsoft Excel and R</StyledList>
                </ul>
                <Subheading><strong>Tutor | Boston University Educational Resource Center </strong></Subheading>
                <Timeframe><em>Sep. 2021 - <strong>present</strong></em></Timeframe>
                <ul>
                    <StyledList>Work one-on-one with undergraduate students to improve their understanding of general chemistry and plan study strategies for four to six hours each week</StyledList>
                </ul>
                <Subheading><strong>Library Assistant | Pickering Educational Resources Library </strong></Subheading>
                <Timeframe><em>Sep. 2021 - <strong>present</strong></em></Timeframe>
                <ul>
                    <StyledList>Responsible for staffing the front desk, making sure that books and other learning materials are in their proper locations, and ensuring smooth operations for dozens of patrons for five to seven hours per week</StyledList>
                </ul>
                <Subheading><strong>PR Coordinator | Women in Neuroscience</strong></Subheading>
                <Timeframe><em>Dec. 2020 - <strong>present</strong></em></Timeframe>
                <ul>
                    <StyledList>Organize and promote club events, including mentorship matching between undergraduate and graduate students and general body meetings</StyledList>
                    <StyledList>Maintain club’s social media presence and communicate with other clubs to plan joint events</StyledList>
                </ul>
                <Subheading><strong>Instructor | Sylvan Learning</strong></Subheading>
                <Timeframe><em>Jun. - Aug. 2022 & Jun. - Aug. 2023</em></Timeframe>
                <ul>
                    <StyledList>Planned curriculum alongside center director and led one cohort of SAT Camp, working with eight high school students twice a week to prepare for the SAT exam</StyledList>
                    <StyledList>Worked with K-12 students for one hour each, up to three at a time to remediate math and reading skills by delivering lesson plans and assessments</StyledList>
                </ul>
                <Subheading><strong>Intern | Shiny Chompers Pediatric Dentistry </strong></Subheading>
                <Timeframe><em>Nov. 2019 - Mar. 2020</em></Timeframe>
                <ul>
                    <StyledList>Produced a final research paper on pretend play after shadowing dentist and hygienists as part of Howard County Intern/Mentor program</StyledList>
                    <StyledList>Worked in the dentistry office for four hours each week, aiding manager with office tasks and performing data entry of patient records</StyledList>
                </ul>
                <Subheading><strong>Teacher's Aide | Children’s Manor Montessori School </strong></Subheading>
                <Timeframe><em>Jul. - Aug. 2019</em></Timeframe>
                <ul>
                    <StyledList>Watched over children aged one to six years and supervised Montessori activities for multiple classrooms</StyledList>
                    <StyledList>Aided the lead teacher in preparing snacks and craft activities for the students</StyledList>
                </ul>
            </MainText>
        </Main>
    )
}