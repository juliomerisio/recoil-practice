import { createGlobalStyle } from 'styled-components';
import 'antd/lib/checkbox/style/index.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    --primary: #F5802C;
    --transparent: rgba(197, 197, 197, 0.6);
    --white: #D1D5D8;
    --gray1: #606469;
    --gray2: #393e44;
    --gray3: #2C3035;
    --black: #24282C;
  }

  body {
    color: var(--white);
    background: var(--gray3);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 16px;
  }
  a, button {
    outline: none;
  }

  h1, h2, h3, h4, h5 {
    padding: 12px 0;
  }
  h1 {
    font-size: 42px;
    line-height: 50px;
    color: var(--primary)
  }
  h2 {
    font-size: 36px;
    line-height: 40px;
  }
  h3 {
    font-size: 30px;
    line-height: 36px;

    color: var(--transparent)
  }
  h4 {
    font-size: 26px;
    line-height: 32px;
  }
  h5 {
    font-size: 24px;
    line-height: 30px;
  }

  /* Tag Input */

  .react-tagsinput {
  background-color: none;
  border: 2px solid var(--black);
  overflow: hidden;
  padding-left: 5px;
  padding-top: 5px;
}

.react-tagsinput--focused {
  border-color: var(--primary);
}

.react-tagsinput-tag {
  background-color: var(--primary);
  border-radius: 2px;
  color: var(--black);
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 8px;
}

.react-tagsinput-remove {
  cursor: pointer;
  font-weight: bold;
}

.react-tagsinput-tag a::before {
  content: " ×";
}

.react-tagsinput-input {
  background: transparent;
  border: 0;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 6px;
  margin-top: 1px;
  outline: none;
  padding: 5px;
  width: 80px;
  color: var(--primary);
}


.ant-checkbox {
  color: var(--white);
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: var(--primary);
}
.ant-checkbox-checked::after {
  border: 1px solid var(--primary);
  content: '';
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: var(--primary);
  border-color: var(--primary);
}


.ant-checkbox-indeterminate .ant-checkbox-inner::after {
  background-color: var(--primary);
}

`;
