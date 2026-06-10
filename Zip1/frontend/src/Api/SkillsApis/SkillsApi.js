import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

/* ✅ GET ALL */
export const GetSkillsApi = async () => {
  return await commonrequest(
    "GET",
    `${BASE_URL}/api/skills/`,
    {},
    false,
    "admin"
  );
};

/* ✅ ADD */
export const AddSkillApi = async (data) => {
    console.log("STEP 4: API Layer Hit ✅");
  return await commonrequest(
    "POST",
    `${BASE_URL}/api/skills/addskill`,
    data,
    false,
    "admin"
  );
};

/* ✅ UPDATE */
export const UpdateSkillApi = async (id, data) => {
  return await commonrequest(
    "PUT",
    `${BASE_URL}/api/skills/${id}`,
    data,
    false,
    "admin"
  );
};

/* ✅ DELETE */
export const DeleteSkillApi = async (id) => {
  return await commonrequest(
    "DELETE",
    `${BASE_URL}/api/skills/${id}`,
    {},
    false,
    "admin"
  );
};
