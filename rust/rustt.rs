use solana_program::{
    account_info::{next_account_info, AccountInfo},
    declare_id,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

declare_id!("DUkUcGXcewTt7gVB7Hnvu86AVUo6hm625HdotbfT7b6e");

#[derive(Debug)]
pub enum SolAttestError {
    UIDNotFound,
    AlreadyRevoked,
    Irrevocable,
}

impl From<SolAttestError> for ProgramError {
    fn from(e: SolAttestError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

#[derive(Debug, Clone, Copy)]
pub enum Instruction {
    Attest {
        revocable: bool,
    },
    Revoke {
        uid: u64,
    },
}

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instructions: Instruction = unpack_instruction(instruction_data)?;
    match instructions {
        Instruction::Attest { revocable } => {
            msg!("Instruction: Attest");
            process_attest(accounts, revocable, program_id)
        },
        Instruction::Revoke { uid } => {
            msg!("Instruction: Revoke");
            process_revoke(accounts, uid, program_id)
        },
    }
}

fn process_attest(
    accounts: &[AccountInfo],
    revocable: bool,
    _program_id: &Pubkey,
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let attestation_account = next_account_info(accounts_iter)?;
    let attester_account = next_account_info(accounts_iter)?;

    // Attestation logic here
    msg!("Attestation for {} by {}, revocable: {}", attestation_account.key, attester_account.key, revocable);

    Ok(())
}

fn process_revoke(
    accounts: &[AccountInfo],
    uid: u64,
    _program_id: &Pubkey,
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let attestation_account = next_account_info(accounts_iter)?;

    // Revoke logic here
    msg!("Revoking attestation UID: {} for account {}", uid, attestation_account.key);

    Ok(())
}

fn unpack_instruction(_data: &[u8]) -> Result<Instruction, ProgramError> {
    // Unpacking logic for instruction_data
    // This is a placeholder logic. Actual implementation will vary based on your instruction_data format.
    Ok(Instruction::Attest { revocable: true }) // Example placeholder
}
