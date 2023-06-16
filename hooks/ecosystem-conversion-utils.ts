import axios from "axios";
import camelCase from "lodash/camelCase";

import { Member } from "~/types/ecosystem";

async function fetchMembers() {
  try {
    // from ecosystem main
    const res = await axios.get(
      "https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/members.json"
    );
    const membersArray: Member[] = [];
    Object.values(res.data).forEach((tier: any) => {
      Object.values(tier).forEach((member: any) => {
        // convert falsy values to 0, used for correct sorting on the Ecosystem page
        if (!member.stars) {
          member.stars = 0;
        }
        membersArray.push(member);
      });
    });
    return membersArray.map((obj: any) => toCamelCase(obj));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

async function fetchTiers() {
  try {
    // from ecosystem main
    const res = await axios.get(
      "https://raw.githubusercontent.com/qiskit-community/ecosystem/master/ecosystem/resources/tiers.json"
    );
    return res.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

function toCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  } else if (obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCase(obj[key]),
      }),
      {}
    );
  }
  return obj;
}

export { fetchMembers, fetchTiers };
