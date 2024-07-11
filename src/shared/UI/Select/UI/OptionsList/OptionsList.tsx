import { Option } from '../../Types/ISelect';

const OptionsList = ({options}: {options: Option[]}) => {
    return (
        <>
        {options.map((option: Option) => {
            return (
                <option value={option.value}>{option.title}</option>
            )
        })}
        </>
    );
};

export default OptionsList;