import React from "react";

const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

export function FormattedDate({date, ...props}: { date: Date } & React.TimeHTMLAttributes<HTMLElement>) {
    return (
        <time dateTime={date.toISOString()} {...props}>
            {dateFormatter.format(date)}
        </time>
    )
}
