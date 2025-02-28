import '@testing-library/jest-dom';
import { configure } from "@evinced/unit-tester";

configure({
  serviceAccountId: process.env.EVINCED_SERVICE_ID,
  serviceAccountSecret: process.env.EVINCED_API_KEY,
});