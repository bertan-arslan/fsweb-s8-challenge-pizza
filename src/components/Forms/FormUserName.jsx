import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function OrderUser({ value, onChange, dataCy }) {
  return (
    <Form>
      <FormGroup>
        <Label
          for="orderUser"
          style={{ fontFamily: "Barlow", fontWeight: "500", fontSize: "24px" }}
        >
          Adınız
        </Label>
        <Input
          type="text"
          name="orderUser"
          id="orderUser"
          placeholder="Sipariş kimin adına?"
          value={value}
          onChange={onChange}
          data-cy={dataCy}
        />
      </FormGroup>
    </Form>
  );
}
