import { FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} value={value} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
