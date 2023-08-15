"use client";
import { Checkbox, Accordion, Divider } from "@mantine/core";

const SideBar = () => {
  return (
    <div className="sticky top-5 w-64 border border-info/20 rounded p-2">
      <div className="mb-1 pb-1">
        <h3 className="mb-2 text-center">میزان اعتبار</h3>
        <div className="flex justify-center mb-1 border border-info/20 p-1 rounded">
          <p>از</p>
          <input type="text" className="w-16 mx-2" />
          <p>تومان</p>
        </div>
        <div className="flex justify-center border border-info/20 p-1 rounded">
          <p>تا</p>
          <input type="text" className="w-16 mx-2" />
          <p>تومان</p>
        </div>
      </div>
      <Accordion
        defaultValue="type"
        className="mb-1 pb-1"
      >
        <Accordion.Item value="gaurantee">
          <Accordion.Control>نوع ضمانت:</Accordion.Control>
          <Accordion.Panel>
            <Checkbox label="چک" />
            <Divider my="sm" variant="dashed" />
            <Checkbox label="سفته" />
            <Divider my="sm" variant="dashed" />
            <Checkbox label="ضامن" />
            <Divider my="sm" variant="dashed" />
            <Checkbox label="سایر" />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="paytype">
          <Accordion.Control>نوع پرداخت</Accordion.Control>
          <Accordion.Panel>
            <Checkbox label="کیف پول" />
            <Divider my="sm" variant="dashed" />
            <Checkbox label="کارت نقدی" />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="verification">
          <Accordion.Control>اعتبار سنجی</Accordion.Control>
          <Accordion.Panel>
            <Checkbox label="با اعتبار سنجی" />
            <Divider my="sm" variant="dashed" />
            <Checkbox label="بدون اعتبار سنجی" />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="specialContracts">
          <Accordion.Control>قرارداد های خاص</Accordion.Control>
          <Accordion.Panel>
            <Checkbox label="بازنشسته" />
            <Divider my="sm" variant="dashed" />
            <Checkbox label="فرهنگیان" />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideBar;
