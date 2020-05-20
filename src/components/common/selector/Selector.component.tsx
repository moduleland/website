import Select from "react-select";
import Icon from "@mdi/react";
import {mdiChevronDown} from "@mdi/js";
import React from "react";
import {ModuleLabel} from "../moduleLabel/ModuleLabel.component";

export type Option = {
    value: any,
    label: string
}

type props = {
    options: any
    onChange: (option: Option) => void;
    selected: any
}

export const Selector: React.FunctionComponent<props> =
    ({
        options,
        onChange,
        selected
    }) => {

    const selectStyle = {
        control: () => ({
            display: 'flex',
            height: '1.5em',
            padding: '.5em 1em',
            border: '1px solid #1abc9c',
            fontSize: '16px',
            color: 'black'
        }),
        valueContainer: () => ({
            lineHeight: '1.5em'
        }),
        singleValue: () => ({}),
        placeholder: () => ({}),
        input: () => ({}),
        indicatorsContainer: () => ({
            display: 'none'
        }),
        menu: (s: any) => ({
            ...s,
            border: '1px solid #1abc9c',
            borderTop: 0,
            top: 'auto',
            borderRadius: 0,
            margin: 0,
            boxSizing: '',
            cursor: 'pointer',
            width: 'calc(100% - 2px)'
        }),
        group: () => ({}),
        groupHeading: () => ({
            fontSize: '14px',
            color: '#bdc3c7',
            padding: '.5em 1em',
        }),
        option: (base: any, state: any) => {
            return {
                ...base,
                backgroundColor: state.isFocused ? '#16a085' : '',
                padding: '.5em 1em',
                color: state.isFocused ? 'white' : 'black',
                lineHeight: '1.5em',
                cursor: 'pointer',
                ':active': {
                    backgroundColor: state.isFocused ? '#16a085' : ''
                },
            }
        }
    }

    const CustomOptionLabel: React.FunctionComponent<Option> = ({ value, label }) => (
        <ModuleLabel
            isPrivate={value.is_private}
            language={value.language}
        >{label}</ModuleLabel>
    );

    const _onChange = (option: any) => {
        onChange(option);
    }

    return (
        <div
            style={{
                position: 'relative'
            }}
        >
            <Select
                isLoading={options.length === 0}
                placeholder={'Select module...'}
                isSearchable={false}
                styles={selectStyle}
                options={options}
                value={selected}
                onChange={_onChange}
                formatOptionLabel={CustomOptionLabel}
            />
            <Icon
                path={mdiChevronDown}
                size={1}
                style={{
                    color: '#16a085',
                    position: 'absolute',
                    top: '0.66em',
                    right: '0.66em'
                }}
            />
        </div>
    )
}
