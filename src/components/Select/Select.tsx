import React from 'react';
import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';
import { SelectValue } from 'antd/lib/select';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import 'antd/es/select/style/index.css';
import { tagState } from './Select.atom';
import { selectOptions } from './Select.selector';

const { Option } = AntdSelect;

const MySelect = styled(AntdSelect)`
  color: var(--white) !important;
  .ant-select-selector {
    background: none !important;
    border: 1px solid var(--gray1) !important;
  }
`;

export const Select = () => {
  const filters = useRecoilValue(selectOptions);
  const setValue = useSetRecoilState(tagState);
  const onChange = React.useCallback((value: SelectValue) => setValue(value), [
    setValue,
  ]);

  return (
    <MySelect
      showSearch
      style={{ width: 200 }}
      placeholder="Select a tag"
      optionFilterProp="children"
      onChange={onChange}
      allowClear
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {filters.map((item) => (
        <Option value={item}>{item}</Option>
      ))}
    </MySelect>
  );
};
