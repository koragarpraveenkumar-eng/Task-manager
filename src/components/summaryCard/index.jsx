import React from 'react'
import {Box, SummaryCardContainer} from './style'

function SummaryCard({title, count}){
    return(
        <SummaryCardContainer>
            <Box>{title}</Box>
            <Box>{count}</Box>
        </SummaryCardContainer>
    )
}

export default SummaryCard