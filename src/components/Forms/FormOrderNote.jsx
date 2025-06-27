import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function OrderNote({ value, onChange }) {
  return (
    <Form>
      <FormGroup>
        <Label for="orderNote" style={{fontFamily:"Barlow", fontWeight:"500", fontSize:"24px"}}>Sipariş Notu</Label>
        <Input
          type="text"
          name="orderNote"
          id="orderNote"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Form>
  );
}
