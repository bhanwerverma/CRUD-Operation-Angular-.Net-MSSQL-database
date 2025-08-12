using Crud.netapi.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Crud.netapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeController : ControllerBase
    {
        private readonly EmployReprository _employReprository;
        public EmployeController(EmployReprository employReprository) {
            _employReprository = employReprository;
        }
        [HttpPost]
        public async Task<ActionResult> AddEmployee([FromBody] employ model) {
            await _employReprository.AddemployAsync(model);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult> GeteEmployeelist ()
        {
            var employList = await _employReprository.GetallEmployeeAsync();
            return Ok(employList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetEmployByid([FromRoute] int id)
        {
            var employee = await _employReprository.getemploybyId(id);
            return Ok(employee);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult> UpdateEmploy([FromRoute] int id , [FromBody] employ model)
        {
            await _employReprository.UpdateEmploybyIdAsync(id, model);
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeteleEmployById([FromRoute] int id)
        {
            await _employReprository.DeleteEmployeByidAsync(id);
            return Ok();
        }

    }
}
