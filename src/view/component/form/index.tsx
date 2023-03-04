import React from 'react';
import BaseForm from 'view/component/form/BaseForm';
import LoadForm from 'view/component/form/LoadForm';
import * as Styled from 'view/component/form/Styled.FormComp';

const FormComp = () => {
  return (
    <>
      <Styled.FormComp>
        <BaseForm />
        <LoadForm />
      </Styled.FormComp>
      <button>등록</button>
    </>
  );
};

export default FormComp;
