using CMH.ExerciseProject.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace CMH.ExerciseProject.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class PatientController : ControllerBase
    {


        public PatientController()
        {
        }

        [HttpGet]
        public IEnumerable<Patient> SearchPatients(string name)
        {
            /**
             Todo
             */
            return null;
        }
        [HttpGet]
        public IEnumerable<Patient> GetPatients()
        {
            /**
             Todo
             */

            return new List<Patient>() {
                new Patient()
                {
                    PatientId = 1,
                    FirstName = "Test",
                    LastName = "Test",
                    Age = 1,
                }
            };
        }

        [HttpPost]
        public Task<int> AddPatient(Patient patient)
        {
            /**
             Todo
             */
            return null;
        }
        [HttpDelete]
        public Task<int> DeletePatient(int patientId)
        {
            /**
             Todo
             */
            return null;
        }
    }
}
