package idc.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity
public class Analysis {

	@Id	
	private Long id;

	private String application;

	private String module;

	private Date execdate;

	@Enumerated(EnumType.STRING)
	private ResultType result;

	public enum ResultType {
		APROBADO, RECHAZADO, AUTORIZADO
	};

	public Analysis() {

	}

	public Analysis(Long id, String application, String module) {
		this.id = id;
		this.application = application;
		this.module = module;

		this.execdate = new Date();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getApplication() {
		return application;
	}

	public void setApplication(String application) {
		this.application = application;
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public Date getExecdate() {
		return execdate;
	}

	public ResultType getResult() {
		return result;
	}

	public void setResult(ResultType result) {
		this.result = result;
	}

}
