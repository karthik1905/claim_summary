// package com.cts.product.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.cts.product.Claim;
// import com.cts.product.dao.ClaimDao;

// @RestController
// @CrossOrigin
// @RequestMapping("/api/claims")
// public class ClaimsRestController {
	
// 	@Autowired
// 	private ClaimDao claimDao;
	
	
// 	@GetMapping
// 	public List<Claim> findAll(){
// 		return claimDao.findAll();
// 	}
	
// 	@PostMapping
// 	public Claim save(@RequestBody Claim claim) {
// 		return claimDao.save(claim);
// 	}
	
// 	@PostMapping("/saveAll")
// 	public List<Claim> saveAll(@RequestBody List<Claim> claims){
// 		return claimDao.saveAll(claims);
// 	}
	
	
// 	@GetMapping("/{id}")
// 	public Claim findById(@PathVariable("id")String id) {
		
// 		return claimDao.findById(id).orElse(null);
// 	}
	
// 	// @GetMapping("/byName/{name}")
// 	// public List<Claim> findByName(@PathVariable("name")String name){
// 	// 	return claimDao.findClaimByNameLike("%"+name+"%");
		
// 	// }
	
// 	@DeleteMapping
// 	public void deleteClaim(@RequestBody Claim claim) {
// 		claimDao.delete(claim);
// 	}
	
// 	@DeleteMapping("/{id}")
// 	public void deleteClaimById(@PathVariable("id") String id) {
// 		claimDao.deleteById(id);
// 	}
	
	
// }
