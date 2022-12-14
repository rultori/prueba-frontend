import { FormElement, Grid, GridProps, Input } from '@nextui-org/react'
import { ChangeEvent, FC } from 'react'

interface Props extends GridProps {
    handleStartDateChange: (e: ChangeEvent<FormElement>) => void,
    handleEndDateChange: (e: ChangeEvent<FormElement>) => void,
    startDate: string | null,
    endDate: string | null,
}

export const DateRangeFilter: FC<Props> = ({ handleStartDateChange, handleEndDateChange, startDate, endDate, xs, sm, md }) => {
    return (
        <Grid xs={xs} sm={sm} md={md} css={{ padding: 0 }}>
            <Grid xs={6}>
                <Input
                    width="186px"
                    label="Fecha inicio"
                    type="date"
                    clearable
                    value={startDate || ''}
                    onChange={handleStartDateChange}
                />
            </Grid>
            <Grid xs={6}>
                <Input
                    width="186px"
                    label="Fecha fin"
                    type="date"
                    clearable
                    value={endDate || ''}
                    onChange={handleEndDateChange}
                />
            </Grid>
        </Grid>
    )
}
