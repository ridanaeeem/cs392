import React from "react";
import { Main, MainTitle, MainText } from "./Home"
import { StyledList, Subheading } from "./Education"
import { Timeframe } from "./Work"

export function Volunteer(){
    return(
        <Main>
            <MainTitle>Volunteer Experiences</MainTitle>
            <MainText>
                <Subheading><strong>Intern | UNC Neurosurgery (Remote)</strong></Subheading>
                <Timeframe><em>May - Aug. 2022</em></Timeframe>
                <ul>
                    <StyledList>Met with other interns weekly to discuss medical school application process while receiving instruction on neuroscience topics and suture techniques</StyledList>
                </ul>
                <Subheading><strong>Intern | Casey Cares Foundation</strong></Subheading>
                <Timeframe><em>Jun. - Aug. 2021</em></Timeframe>
                <ul>
                    <StyledList>Packed and shipped care packages to dozens of Casey Cares families, contacting certain families over the phone to request address and contact information as needed</StyledList>
                    <StyledList>Used Raiser’s Edge NXT to organize contact information about Casey Cares families and store a record of what care packages contained</StyledList>
                    <StyledList>Organized and mailed hundreds of pajamas from annual pajama drive to local hospitals</StyledList>
                </ul>
                <Subheading><strong>Tutor | Boston University Community Service Center - Wizards </strong></Subheading>
                <Timeframe><em>Dec. 2020 - May 2021</em></Timeframe>
                <ul>
                    <StyledList>Created lesson plans and videos explaining various scientific topics through experimentation for local elementary, middle, and high schools with other tutors weekly</StyledList>
                </ul>
                <Subheading><strong>Blog Writer | Leading Women Tomorrow  </strong></Subheading>
                <Timeframe><em>Sep. 2020 - May 2021</em></Timeframe>
                <ul>
                    <StyledList>Wrote for the nonprofit’s Boston University chapter about women and minorities in STEM being affected by impostor syndrome</StyledList>
                </ul>
                <Subheading><strong>Volunteer | Howard County General Hospital  </strong></Subheading>
                <Timeframe><em>Jul. - Aug 2019</em></Timeframe>
                <ul>
                    <StyledList>Volunteered as part of the VolunTeen program for a total of 40 hours in the post-anesthesia care unit</StyledList>
                    <StyledList>Stocked and prepared beds for patients coming out of surgery and maintained an organized and clean front desk environment</StyledList>
                </ul>
            </MainText>
        </Main>
    )
}