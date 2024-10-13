import { DatesProvider, DatePickerInput } from '@mantine/dates';
import { useLocale } from 'next-intl';

export default function DateSelect({placeholder, label, onChange, value}){
    const locale = useLocale();
    return (
    <DatesProvider settings={{ locale: locale, firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
        <DatePickerInput
            label={label}
            placeholder={placeholder ?? ''}
            value={value}
            onChange={onChange}
        />
    </DatesProvider>
    )
}